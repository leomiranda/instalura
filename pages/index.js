import React from 'react';
import Text from '../src/components/foundation/Text';
import { Button } from '../src/components/commons/Button';
import { Grid } from '../src/components/foundation/layout/Grid';
import { WebsitePageContext } from '../src/components/wrappers/WebsitePage';
import { Box } from '../src/components/foundation/layout/Box/index';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function HomeScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    <Box display='flex' flexDirection='column' flex='1'>
      <Grid.Container marginTop={{ xs: '32px', md: '75px' }}>
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 5 }}
            display='flex'
            alignItems='flex-start'
            justifyContent='center'
            flexDirection='column'
            marginBottom={{ xs: '32px', md: '75px' }}
          >
            <div>
              <Text
                variant='title'
                tag='h1'
                color='tertiary.main'
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Compartilhe momentos e conecte-se com amigos
              </Text>
              <Text
                variant='paragraph1'
                tag='p'
                color='tertiary.light'
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industries standard dummy
                text ever since the 1500s.
              </Text>

              <Button
                variant='primary.main'
                margin={{
                  xs: 'auto',
                  md: 'initial',
                }}
                display='block'
                onClick={() => websitePageContext.toggleModalCadastro()}
              >
                Cadastrar
              </Button>
            </div>
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <img
              style={{ display: 'block', margin: 'auto' }}
              alt='Imagem de celular'
              src='https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png'
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});

// export default function Home() {
//   return (
//     <WebsitePageWrapper
//       seoProps={{
//         headTitle: 'Home',
//       }}
//       pageBoxProps={{
//         backgroundImage: 'url(/images/bubbles.svg)',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'bottom right',
//       }}
//     >
//       <HomeScreen />
//     </WebsitePageWrapper>
//   );
// }
