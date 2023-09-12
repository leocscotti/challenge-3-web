import BikeCompleta from '../../assets/images/bike-completa.jpg'
import Pedivela from '../../assets/images/pedivela.jpg'
import BikeFrente from '../../assets/images/bike-frente.png'

export default function Vistoria(){

    return(
        <main>
            <div>
                <img src={BikeCompleta} alt="BikeCompleta" className='fotosBike'/>
                <p>
                    <strong>Tire uma foto completa da sua bike, sempre do lado que apareça a corrente (não obstrua a marca)</strong>
                </p>
                <button>Tirar foto</button>
            </div>

            <div>
                <img src={Pedivela} alt="Pedivela" className='fotosBike' />
                <p>
                    <strong>Tire uma foto do pédivela da sua bike</strong>
                </p>
                <button>Tirar foto</button>
            </div>

            <div>
                <img src={BikeFrente} alt="BikeFrente" className='fotosBike'/>
                <p>
                    <strong>Tire uma foto da sua bicicleta de frente (não obstrua a marca)</strong>
                </p>
                <button>Tirar foto</button>
            </div>
            
            
        </main>
    )
}