import Layout from '../components/Layout'
import Image from 'next/image'

const Nosotros = () => {
    return (
        <Layout
            pagina='Nosotros'
        >
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>
                <div>
                    <div className='contenido'>
                        <Image width={600} height={600} src="/img/nosotros.png"
                            alt="Imágen sobre nosotros" layout="responsive" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et orci sodales nunc semper placerat. Praesent lacinia ante eu gravida pellentesque. Aliquam quis fermentum justo. Praesent diam dolor, dapibus at pretium vel, semper ut neque. Curabitur porttitor lacus eget felis gravida faucibus. Cras rhoncus elit pellentesque porta iaculis. Vivamus rutrum erat quis scelerisque imperdiet. Nulla dictum mauris a efficitur sollicitudin. Duis sollicitudin tincidunt ante sed bibendum.

                            Integer iaculis odio id augue imperdiet varius. Aenean vulputate eu velit non porttitor. Quisque maximus magna non risus feugiat, ut sollicitudin nulla faucibus. Nulla facilisi. Quisque viverra leo sed metus placerat, at convallis felis dictum. Aliquam egestas odio sed diam ullamcorper, nec consectetur turpis malesuada. Donec aliquet nunc id urna vulputate, ut fringilla nibh interdum. Nam tristique, mi sit amet eleifend eleifend, libero velit fringilla nibh, et viverra erat arcu sed neque. Aliquam a quam ipsum. Aliquam quis ornare lectus, sit amet venenatis lorem.

                            Curabitur vitae convallis enim, sed pharetra felis. Etiam fermentum tellus eget ullamcorper euismod. Nulla id erat pulvinar, accumsan purus a, pharetra felis. Praesent tristique, orci id elementum fringilla, nunc lectus sagittis quam, id ullamcorper risus est et felis. Donec commodo magna quam, a viverra libero luctus malesuada. In non mollis lectus. Sed congue diam bibendum mollis accumsan. Donec mauris sem, vestibulum vitae convallis nec, feugiat convallis nisl. Cras vitae suscipit ex. Pellentesque vehicula orci eget arcu vulputate, sit amet consectetur odio bibendum. Mauris vestibulum urna et sem aliquam, eu vestibulum est molestie. Phasellus non diam nec velit dapibus blandit. Aliquam erat volutpat. Nullam tempor urna est, non ultricies est blandit sit amet. Etiam posuere augue et mi viverra sagittis.

                            Etiam lacinia felis ut lorem convallis, vel sollicitudin dolor pulvinar. Vestibulum ullamcorper egestas est. In eget eleifend enim, ac venenatis nunc. Quisque congue, odio facilisis convallis fringilla, mauris ligula dapibus lectus, vitae maximus massa eros non arcu. Suspendisse malesuada sem non ante fermentum, eget tristique lorem varius. Duis rutrum in est id sollicitudin. Proin fringilla dolor vel erat finibus, eget venenatis nibh mollis. Nam et ligula in libero pretium faucibus sed nec sapien. Morbi at tortor a ante bibendum scelerisque. Suspendisse sed arcu vitae odio posuere pretium at in orci. Donec imperdiet eget magna aliquam viverra. Proin magna sem, tempor vitae ultrices sit amet, accumsan eget enim. Pellentesque in ipsum aliquet, dictum nisi a, sodales odio. Maecenas non leo non lacus sollicitudin mollis. Sed leo orci, aliquet quis justo a, finibus dictum magna.

                            Nulla metus ex, maximus at tempus non, tempus pharetra enim. In congue venenatis mi sed euismod. Sed varius, est vitae pretium hendrerit, orci metus aliquet felis, vitae mollis est lacus a ante. Quisque orci ipsum, volutpat quis massa et, vestibulum elementum ex. Donec non mauris sit amet lectus mattis auctor. Curabitur bibendum volutpat tellus, sit amet accumsan mauris placerat vitae. Integer vestibulum, felis vitae tempus tincidunt, erat massa pretium urna, quis consequat ex nulla at erat. Vivamus quis nulla interdum risus pellentesque iaculis. Sed et nisl eu metus pellentesque rutrum ut vitae nulla. Integer accumsan est pretium libero mollis convallis id ac metus. Nunc dapibus tellus at enim sodales mattis. Mauris lobortis tellus tincidunt, varius nisl in, blandit ligula. Mauris volutpat elit sed nibh hendrerit, vitae consequat metus tempus. Aliquam convallis nulla vitae orci mattis, eu porttitor velit interdum.</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros