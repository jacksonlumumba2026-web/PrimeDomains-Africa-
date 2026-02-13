import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const db = getFirestore();

async function checkUserRole(user) {
  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const role = docSnap.data().role;

    if (role === "admin") {
      window.location.href = "admin-dashboard.html";
    } else if (role === "seller") {
      window.location.href = "seller-dashboard.html";
    } else {
      window.location.href = "buyer-dashboard.html";
    }
  } else {
    alert("User role not found");
  }
}
