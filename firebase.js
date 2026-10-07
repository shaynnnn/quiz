/* =========================================================
   FIREBASE CONFIGURATION
   ========================================================= */

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

import {
    getAuth,
    signInAnonymously
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";


/* =========================================================
   FIREBASE CONFIG
   ========================================================= */

const firebaseConfig = {
    apiKey: "AIzaSyByVa-kJ84LuyZkiLcTAuDQQLbXY3QOKM",
    authDomain: "quiz-ab01f.firebaseapp.com",
    projectId: "quiz-ab01f",
    storageBucket: "quiz-ab01f.firebasestorage.app",
    messagingSenderId: "784220339869",
    appId: "1:784220339869:web:cc338b8f8de451e41fde74",
    measurementId: "G-JZ33MV64TM"
};


/* =========================================================
   INITIALIZE FIREBASE
   ========================================================= */

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


/* =========================================================
   ANONYMOUS LOGIN
   ========================================================= */

export async function ensureAnonymousUser() {

    try {

        if (auth.currentUser) {
            return auth.currentUser;
        }

        const credential = await signInAnonymously(auth);

        console.log(
            "Firebase anonymous login successful:",
            credential.user.uid
        );

        return credential.user;

    } catch (error) {

        console.error(
            "Firebase Anonymous Authentication Error:",
            error
        );

        throw error;
    }
}


/* =========================================================
   SAVE QUIZ RESULT
   ========================================================= */

export async function saveQuizResult(result) {

    try {

        const user = await ensureAnonymousUser();

        const resultData = {
            ...result,

            userId: user.uid,

            createdAt: serverTimestamp()
        };

        console.log(
            "Saving quiz result:",
            resultData
        );

        const documentReference = await addDoc(
            collection(db, "quizResults"),
            resultData
        );

        console.log(
            "Quiz result successfully saved:",
            documentReference.id
        );

        return documentReference;

    } catch (error) {

        console.error(
            "Firebase Save Quiz Result Error:",
            error
        );

        throw error;
    }
}


/* =========================================================
   GET CURRENT USER RESULTS
   ========================================================= */

export async function getMyResults() {

    try {

        const user = await ensureAnonymousUser();

        const resultsQuery = query(
            collection(db, "quizResults"),
            orderBy(
                "createdAt",
                "desc"
            )
        );

        const snapshot = await getDocs(resultsQuery);

        return snapshot.docs
            .map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            .filter(
                (result) =>
                    result.userId === user.uid
            );

    } catch (error) {

        console.error(
            "Firebase Get My Results Error:",
            error
        );

        throw error;
    }
}


/* =========================================================
   GET ALL STUDENT RESULTS
   ========================================================= */

export async function getAllResults() {

    try {

        await ensureAnonymousUser();

        const resultsQuery = query(
            collection(db, "quizResults"),
            orderBy(
                "createdAt",
                "desc"
            )
        );

        const snapshot = await getDocs(resultsQuery);

        return snapshot.docs.map(
            (doc) => ({
                id: doc.id,
                ...doc.data()
            })
        );

    } catch (error) {

        console.error(
            "Firebase Get All Results Error:",
            error
        );

        throw error;
    }
}