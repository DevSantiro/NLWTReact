import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { database } from '../../services/firebase';

import logoImg from '../../assets/images/logo.svg';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';

import './index.scss';

type RoomParams = {
  id: string;
}

type NavProps = {
  isAdmin?: boolean
}

export const Navbar = ({isAdmin = false}: NavProps) => {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState('');
  const roomId = params.id;

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })
  
    history.push('/');
  }

  return (
    <header>
      <div className="content">
        <img src={logoImg} alt="Letmeask" onClick={(event) => {history.push('/')}} />
        <div>
          <RoomCode code={roomId}/>
          {isAdmin && (
            <Button onClick={handleEndRoom} isOutlined>Encerrar Sala</Button>
          )}
          <div className="toggle">
            <input type="checkbox" id="foo" />
            <label htmlFor="foo"></label>
          </div>
        </div>
      </div>
    </header>
  );
}