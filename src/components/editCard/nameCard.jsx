
import PropTypes from 'prop-types';
import { MdDelete } from "react-icons/md";
import { NameCard, Name, DeleteToUpdate, Delete } from '../../assets/styled/editCardSryled/editCardSryled';

export function NameCardcomponents({ nameCard, setNameCard, card }) {
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
                    <MdDelete />
                </Delete>
            </DeleteToUpdate>
        </NameCard>
    );
}

NameCardcomponents.propTypes = {
    nameCard: PropTypes.string.isRequired,
    setNameCard: PropTypes.func.isRequired,
    card: PropTypes.string.isRequired,
};