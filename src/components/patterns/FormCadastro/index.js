import React from 'react';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import errorAnimation from './animations/error.json';
import successAnimation from './animations/success.json';
import { Grid } from '../../foundation/layout/Grid';
import { Box } from '../../foundation/layout/Box';
import { Button } from '../../commons/Button/index';
import TextField from '../../forms/TextField/index';
import Text from '../../foundation/Text';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(
    formStates.DEFAULT
  );
  const [userInfo, setUserInfo] = React.useState({
    username: 'test',
    name: 'test@gmail.com',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');

    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid =
    userInfo.username.length === 0 || userInfo.name.length === 0;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        setIsFormSubmited(true);

        // Data Transfer Object
        const userDTO = {
          username: userInfo.username,
          name: userInfo.name,
        };
        fetch('https://instalura-api.vercel.app/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDTO),
        })
          .then((resServer) => {
            if (resServer.ok) return resServer.json();

            throw new Error('Não foi possível cadastrar o usuário :(');
          })
          .then((resObj) => {
            setSubmissionStatus(formStates.DONE);
            console.log(resObj);
          })
          .catch((err) => {
            setSubmissionStatus(formStates.ERROR);
            console.error(err);
          });
      }}
    >
      <Text variant='title' tag='h1' color='tertiary.main'>
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant='paragraph1'
        tag='p'
        color='tertiary.light'
        marginBottom='32px'
      >
        Você está a um passo de saber tudoo que está rolando no bairro, complete
        seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder='Nome'
          name='name'
          value={userInfo.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          placeholder='Usuário'
          name='username'
          value={userInfo.username}
          onChange={handleChange}
        />
      </div>

      <Button
        variant='primary.main'
        type='submit'
        disabled={isFormInvalid}
        fullWidth
      >
        Cadastrar
      </Button>

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box display='flex' justifyContent='center'>
          <Lottie
            display='flex'
            justifyContent='center'
            width='150px'
            height='150px'
            config={{
              animationData: successAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box display='flex' justifyContent='center'>
          <Lottie
            width='150px'
            height='150px'
            config={{
              animationData: errorAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </Box>
      )}
    </form>
  );
}

export default function FormCadastro({ propsDoModal }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex='1 1 0%'
      justifyContent='flex-end'
    >
      <Grid.Col
        display='flex'
        paddingRight={{ md: '0' }}
        flex='1'
        value={{ xs: 12, md: 8, lg: 5 }}
      >
        <Box
          boxShadow='-10px 0px 24px rgba(7, 12, 14, 0.1)'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          flex='1'
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor='white'
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

FormCadastro.propTypes = {
  propsDoModal: PropTypes.node,
};
FormCadastro.defaultProps = {
  propsDoModal: '',
};
