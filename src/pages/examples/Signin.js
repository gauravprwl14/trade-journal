
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Container, Col, Row, Button } from '@themesberg/react-bootstrap';
import { useHistory } from 'react-router-dom';

import { DocumentData } from "firebase/firestore";
import { Routes } from "../../routes";

import BgImage from "../../assets/img/3D Illustration-Product Development-Skin-03.svg";

import { auth, googleAuthProvider, firestore } from '../../firebase/index'

import {
  GoogleAuthProvider,
  signInWithCredential,
  signInWithPopup,
} from "firebase/auth";
import { setLocalStorageTokens } from '../../utils/tokenHelper'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  let history = useHistory();


  const handleLogin = async () => {
    try {
      const googlePopResponse = await signInWithPopup(auth, googleAuthProvider);
      const credential = GoogleAuthProvider.credentialFromResult(googlePopResponse);
      const newCredential = GoogleAuthProvider.credential(
        credential?.idToken
      )
      const user = await signInWithCredential(auth, newCredential)


      if (user) {


        const querySnapshot = await firestore
          .collection("users")
          .where("email", "==", user.user.email)
          .get();

        if (querySnapshot.empty) {
          setLocalStorageTokens({
            isUserLoggedIn: true,
            email: user.user.email,
            name: user.user.displayName,
          })

          await firestore.collection("users").add({
            email: user.user.email,
            name: user.user.displayName,
            number: "",
            whatsApp: "",
            company: "",
          });

        } else {

          const response = querySnapshot.docs.map(
            (doc) => {
              return doc.data();
            }
          );

          console.log('%c response[0] ', 'background: lime; color: black', { obj: response[0] });

          setLocalStorageTokens({
            isUserLoggedIn: true,
            email: response[0]?.email,
            name: response[0]?.name,
          })


        }

        console.log('%c history ', 'background: lime; color: black', { history, routes: Routes.Dashboard });

        history.push(Routes.Dashboard.path)
      }


    } catch (error) {
      console.log('%c error inside login api ', 'background: salmon; color: black', { error });
    }
  };


  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container className="d-flex">
          <div className="d-flex">
            <img src={BgImage} />
          </div>
          <Row>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in to our platform</h3>
                </div>
                <Button variant="danger" type="submit" className="w-100" onClick={handleLogin}>
                  <FontAwesomeIcon icon={faGoogle} /> Continue With Google
                </Button>
              </div>
            </Col>
          </Row>

        </Container>
      </section>
    </main>
  );
};
