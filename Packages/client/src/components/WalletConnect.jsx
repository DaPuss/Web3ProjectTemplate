import { useState } from 'react'
import { Button} from 'react-bootstrap';
import { useAccount, useConnect } from 'wagmi'
import WalletConnectModal from './WalletConnectModal';
import styled from 'styled-components';

const Styles = styled.div`
.btn-primary {
  background-color: ${props => props.theme.primaryPurple};
  color: ${props => props.theme.primaryOrange};
  text-shadow: 2px 2px ${props => props.theme.primaryBlack};
  border-color: ${props => props.theme.primaryBlack};
}
.btn-primary:hover{
  background-color: ${props => props.theme.primaryOrange};
  color: ${props => props.theme.primaryPurple};
}
`;

const WalletConnect = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [{ data: accountData }, disconnect] = useAccount({
        fetchEns: true,
      })

    if(accountData){
        return (
            <div>
              <img src={accountData.ens?.avatar} alt="ENS Avatar" />
              <div>
                {accountData.ens?.name
                  ? `${accountData.ens?.name} (${accountData.address})`
                  : accountData.address}
              </div>
              <div>Connected to {accountData.connector.name}</div>
              <Button onClick={disconnect}>Disconnect</Button>
            </div>
          )
    }

    return(
        <Styles>
            <Button onClick={handleShow}>Connect</Button>
            <WalletConnectModal handleClose={handleClose} show={show}/>
        </Styles>
    )
}

export default WalletConnect;