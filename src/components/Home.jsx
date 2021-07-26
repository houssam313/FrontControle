import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require("./home.jpg")}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
            Les éléments contrôlés lors du passage de votre véhicule concernant l'identification sont les suivants:
           <ul>
             <li>PLAQUE CONSTRUCTEUR</li>
             <li>ÉTAT DE PRÉSENTATION DU VÉHICULE</li>
             <li>CONDITIONS DE CONTRÔLE</li>
             <li>DOCUMENTS D’IDENTIFICATION COMPLÉMENTAIRES</li>
             <li>PLAQUES D’IMMATRICULATION</li>
             <li>NUMÉRO D’IDENTIFICATION, DE CHÂSSIS OU DE SÉRIE DU VÉHICULE</li>
             
             
             
             </ul>   
              
            
              
              
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
