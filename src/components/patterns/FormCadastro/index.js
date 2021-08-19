import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../../foundation/layout/Grid';
import { Box } from '../../foundation/layout/Box';
import { Button } from '../../commons/Button/index';
import TextField from '../../forms/TextField/index';
import Text from '../../foundation/Text';

function FormContent() {
  const [userInfo, setUserInfo] = React.useState({
    email: 'test@gmail.com',
    usuario: 'test',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    console.log(fieldName);
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid =
    userInfo.usuario.length === 0 || userInfo.email.length === 0;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
          placeholder='Email'
          name='email'
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          placeholder='Usuário'
          name='usuario'
          value={userInfo.usuario}
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
        value={{ xs: 12, md: 5, lg: 4 }}
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
