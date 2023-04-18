import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem 0;
    margin: 0 auto;
`

export const Main = styled.div`
    padding: 1rem;
    margin: 0 auto;
    border-radius: 0.5rem;
    width: 90%;
    max-width: 500px;
    background-color: rgba(0, 159, 0, 0.8);

    .hr {
        background-color: green;
        height: 2px;
        margin: 1rem auto;
        width: 100%;
    }
`

export const ImageAndNameAndJobContainer = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
`

export const NameAndJobWrapper = styled.div`
    margin: 0 0 0 1rem;

    h1 {
        font-size: 2rem;
        color: white;
    }

    h2 {
        font-size: 1.1rem;
        color: rgba(47, 47, 47, 0.96);
    }

    @media (max-width: 500px) {
        margin: 0;

        h1 {
            font-size: 1.25rem;
        }

        h2 {
            font-size: 0.8rem;
        }
    }
`

export const ImageWrapper = styled.div`
    text-align: center;

    img {
        margin: 0 0.3rem 0 0;
        width: 120px;
        clip-path: circle(45% at 50% 50%);
    }

    @media (max-width: 500px) {
        img {
            clip-path: circle(40% at 50% 50%);
        }
    }
`
export const MyDescriptionContainer = styled.div`
    h1 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
        text-align: center;
        color: white;
    }
    
    @media (max-width: 500px) {

        h1 {
            font-size: 1.25rem;
        }
    }
`

export const MyDescriptioWrapper = styled.div`
    border-radius: 1rem;
    padding: 0.5rem;
    background-color: rgba(255, 255, 255, 0.1);
`

export const MyDescriptionBox = styled.div`
    display: flex;
    align-items: center;
    border-radius: 1rem;
    padding: 0.5rem;

    p {
        font-size: 0.8rem;
        color: white;
    }
`

export const HobbysContainer = styled.div`
    h1 {
        font-size: 1.5rem;
        text-align: center;
        color: white;
    }

    h1 {
        font-size: 1.25rem;
    }
`

export const HobbyWrapper = styled.div`
    display: flex;
    margin: 1rem 0 0 0;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const HobbyBox = styled.div`
    height: 170px;
    padding: 1rem;
    width: 50%;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.1);

    p {
        font-size: 0.8rem;
        color: white;
    }

    div.icon {
        clip-path: circle(12% at 50% 50%);
        padding: 0.5rem;
        background-color: rgba(255, 255, 255, 0.3);
        margin: 0 0 1rem 0;
    }

    &:nth-of-type(1) {
        border-top-left-radius: 1rem;
        border-bottom: 1px solid green;
    }

    &:nth-of-type(2) {
        border-top-right-radius: 1rem;
        border-left: 1px solid green;
        border-bottom: 1px solid green;
    }

    &:nth-of-type(3) {
        border-bottom-left-radius: 1rem;
    }

    &:nth-of-type(4) {
        border-bottom-right-radius: 1rem;
        border-left: 1px solid green;
    }

    @media (max-width: 500px) {
        div.icon {
            clip-path: circle(17% at 50% 50%);
        }
    }
`

export const ContactContainer = styled.div`
    h1 {
        font-size: 1.5rem;
        text-align: center;
        color: white;
    }

    h1 {
        font-size: 1.25rem;
    }
`

export const ContactWrapper = styled.div`
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem 0 0 0;
    background-color: rgba(255, 255, 255, 0.1);
`

export const ContactBox = styled.div`
    border-radius: 0.3rem;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 1rem 0;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;

        p {
            font-size: 0.8rem;
            color: white;
        }
    }
`