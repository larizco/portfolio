import { Montserrat_Alternates } from 'next/font/google';

const montserratAlternates = Montserrat_Alternates({subsets: ['latin'], weight:  '700'});

export default function Title(props) {
  return <h1 className={montserratAlternates.className}> {props.children} </h1>
}