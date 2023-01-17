import Button from "./../components/Button/Button";

const inter = Inter({ subsets: ['latin'] })

const Home = (props: any) =>{
  return (
    <>
      <Head>
        <title>Cool Pokédex</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pokedex.png" />
      </Head>
      <main>
        <p>Bienvenida a la Cool Pokedex</p>
        <Link href="/pokemon/pikachu">Pikachu</Link>
        <Button as="a" buttonType="outlined">
          awsdasdasd
        </Button>
      </main>
    </>
  );
};

export default Home;