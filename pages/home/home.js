import Head from 'next/head';
import { GlobalStyle } from '../../styles/global';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../../public/icon.jpg';

import { 
    Container,
    Main,
    ImageAndNameAndJobContainer,
    NameAndJobWrapper,
    ImageWrapper,
    MyDescriptionContainer,
    MyDescriptioWrapper,
    MyDescriptionBox,
    HobbysContainer,
    HobbyBox,
    ContactContainer,
    ContactWrapper,
    ContactBox,
    HobbyWrapper
} from '../../styles/home/home';

export default function Home() {
    return(
        <>
        <Head>
            <title>Elieverton - Cartão de Visita</title>
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet"></link>
        </Head>
        <GlobalStyle />
        <Container>
            <Main>
                <ImageAndNameAndJobContainer>
                    <ImageWrapper>
                        <Image width={140} src={Icon} alt="" />
                    </ImageWrapper>
                    <NameAndJobWrapper>
                        <h1>Elieverton Gomes</h1>
                        <h2>Developer and Goalkeeper 👨‍💻🧤</h2>
                    </NameAndJobWrapper>
                </ImageAndNameAndJobContainer>
                <div className='hr' />
                <MyDescriptionContainer>
                    <h1>About me</h1>
                    <MyDescriptioWrapper>
                        <MyDescriptionBox>
                            <div className='icon'>🧑</div>
                            <p>&nbsp;- <strong>Age:</strong> 16 years.</p>
                        </MyDescriptionBox>
                        <MyDescriptionBox>
                            <div className='icon'>⭐</div>
                            <p>&nbsp;- <strong>date of birth:</strong> 26/06/2006.</p>
                        </MyDescriptionBox>
                        <MyDescriptionBox>
                            <div className='icon'>💼</div>
                            <p>&nbsp;- <strong>Job:</strong> Developer Front End.</p>
                        </MyDescriptionBox>
                        <MyDescriptionBox>
                            <div className='icon'>👨</div>
                            <p>&nbsp;- <strong>Gender:</strong> Male.</p>
                        </MyDescriptionBox>
                        <MyDescriptionBox>
                            <div className='icon'>✨</div>
                            <p>&nbsp;- <strong>Cognomen:</strong> Eli, Tom.</p>
                        </MyDescriptionBox>
                        <MyDescriptionBox>
                            <div className='icon'>💫</div>
                            <p>&nbsp;- <strong>Pronouns:</strong> Ele/Dele.</p>
                        </MyDescriptionBox>
                    </MyDescriptioWrapper>
                </MyDescriptionContainer>
                <div className='hr' />
                <HobbysContainer>
                    <h1>My hobbys</h1>
                    <HobbyWrapper>
                        <HobbyBox>
                            <div className='icon'>⚽</div>
                            <p>
                                Gosto bastante de jogar bola com amigos(a).
                            </p>
                        </HobbyBox>
                        <HobbyBox>
                            <div className='icon'>🎥</div>
                            <p>
                                Gosto de assistir filmes e series nas horas vagas.
                            </p>
                        </HobbyBox>
                        <HobbyBox>
                            <div className='icon'>🎮</div>
                            <p>
                                Eu amo jogar jogos, ultimamente estou jogando Fortnite e Dead by Dealight.
                            </p>
                        </HobbyBox>
                        <HobbyBox>
                            <div className='icon'>🎮</div>
                            <p>
                               Gosto de desenvolver sites com base na ideia que vem na minha mente.
                            </p>
                        </HobbyBox>
                    </HobbyWrapper>
                </HobbysContainer>
                <div className='hr' />
                <ContactContainer>
                    <h1>Follow me</h1>
                    <ContactWrapper>
                        <ContactBox>
                            <Link href="https://elievertongomes.site/">
                                <div className='icon'>💬</div>
                                <p>&nbsp;- Instagam: @elieverton6</p>
                            </Link>
                        </ContactBox>
                        <ContactBox>
                            <Link href="">
                                <div className='icon'>📞</div>
                                <p>&nbsp;- WhatsApp: +55 81 9 8231-3251</p>
                            </Link>
                        </ContactBox>
                    </ContactWrapper>
                </ContactContainer>
            </Main>
        </Container>
        </>
    )
}