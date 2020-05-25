import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/login/Login';
import CadastroMentor from './pages/cadastro-mentor/CadastroMentor';
import Main from './pages/main';
import Register from './pages/register/Register';
import Mentor from './pages/mentor/mentor';
import CadastroMentorado from './pages/cadastro-mentorado/CadastroMentorado';
import CadastroMentoria from './pages/cadastro-mentoria/CadastroMentoria';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/cadastro-mentor" component={CadastroMentor} />
        <Route path="/cadastro-mentorado" component={CadastroMentorado} />
        <Route path="/cadastro-mentoria" component={CadastroMentoria} />
        <Route path="/main" component={Main} />
        <Route path="/register" component={Register} />
        <Route path="/mentor" component={Mentor} />
      </Switch>
    </BrowserRouter>
  );
}
