import { useState } from 'react';
import { Modal, Button, Stack } from 'react-bootstrap';
import { useAccount, useConnect } from 'wagmi';
import styled from 'styled-components';

const Styles = styled.div`
  .btn {
    background-color: transparent;
    color: ${(props) => props.theme.primaryOrange};
    text-shadow: 2px 2px ${(props) => props.theme.primaryBlack};
    border-color: ${(props) => props.theme.primaryBlack};
  }
  .btn:hover {
    background-color: ${(props) => props.theme.primaryOrange};
    color: ${(props) => props.theme.primaryPurple};
  }
  * {
    font-family: 'Press Start 2P', cursive;
  }
  .modal-dialog {
    background-color: transparent;
  }
`;

const WalletConnectModal = ({ handleClose, show }) => {
  const [{ data, error }, connect] = useConnect();

  return (
    <Modal show={show} onHide={handleClose}>
      <Styles>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title className="m-auto">Connect Wallet</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Stack gap={3}>
              {data.connectors.map((connector) => (
                <>
                  {connector?.ready && (
                    <Button
                      className="bg-none"
                      key={connector.id}
                      onClick={() => connect(connector)}>
                      {connector.name}
                    </Button>
                  )}
                </>
              ))}
            </Stack>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Styles>
    </Modal>
  );
};

export default WalletConnectModal;
