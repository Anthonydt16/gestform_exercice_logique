
// On renvoie un nombre aléatoire entre une valeur min (incluse)
// et une valeur max (exclue)
//puis on convertie le float en Int
import {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Jeux = () => {

    const getRandomArbitrary = (min, max) => {
        return parseInt(Math.random() * (max - min) + min);
    }

//renvoie le result
    const getResultat = (N) => {
        const Nombre = N

        if (Nombre%5 == 0 && Nombre%3 == 0) {

            return "  Résultat  : GestForm"
        }
        else if( Nombre%5 == 0) {
            return "  Résultat  : Forme"
        }
        else if( Nombre%3 == 0){

            return "  Résultat  : Geste"
        }

        return " Résultat  : "+Nombre



    }
    //State initiale Variable N aleatoire
    const [N, setN] = useState(getRandomArbitrary(-1000, 1000))



    return (
        <div>

            <div className="containerJeux">
                <Header/>
                <h2>Go to play</h2>
                <div className="contenue">


                    <p> N : {N}</p>
                    <p>{getResultat(N)} </p>
                </div>

                <div>
                    <div className="btn" onClick={() => setN(getRandomArbitrary(-1000, 1000))}>
                        Restart
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Jeux;