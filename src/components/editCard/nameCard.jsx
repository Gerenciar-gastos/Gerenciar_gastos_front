
import PropTypes from 'prop-types';
import { MdDelete } from "react-icons/md";
import { NameCard, Name, DeleteToUpdate, Delete } from '../../assets/styled/editCardSryled/editCardSryled';
import deleteCard from './deleteCard';

export function NameCardcomponents({ nameCard, setNameCard, card, id, authToken, setData, navigate }) {

    return (
        <NameCard>
            <Name
                type="text"
                placeholder={card}
                value={nameCard}
                onChange={(e) => setNameCard(e.target.value)}
            />
            <DeleteToUpdate>
                <Delete>
                    <MdDelete onClick={() => deleteCard(id, authToken, setData, navigate)} />
                </Delete>
            </DeleteToUpdate>
        </NameCard>
    );
}

NameCardcomponents.propTypes = {
    nameCard: PropTypes.string.isRequired,
    setNameCard: PropTypes.func.isRequired,
    card: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    authToken: PropTypes.string.isRequired,
    setData: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
};