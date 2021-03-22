import React from 'react';
import css from './UserItem.module.css';
import PropTypes from 'prop-types';

const UserItem = ({ name, email, address, website, phone, company }) => {

    return (
        <div className={css.userItem}>
            <div className="row">
                <div className="column">
                    <div className={css.name}>
                        <h5>{name}</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={`column ${css.marginTopBottom}`}>
                    <div className={css.title}>
                        Contacts
                    </div>
                    <div>
                        {email}
                    </div>
                    <div>
                        tel. {phone}
                    </div>
                    <div>
                        <a rel="noreferrer" href={`http://` + website} target="_blank">{website}</a>
                    </div>
                </div>
                <div className={`column ${css.marginTopBottom}`}>
                    <div className={css.title}>
                        Company
                    </div>
                    <div>
                        {company?.name}
                    </div>
                    <div>
                        {company?.catchPhrase}
                    </div>
                </div>
                <div className={`column ${css.marginTopBottom}`}>
                    <div className={css.title}>
                        Address
                    </div>
                    <div className={css.address}>
                        <div>
                            {address?.city}
                        </div>
                        <div>
                            {address?.street}
                        </div>
                        <div>
                            {address?.zipcode}
                        </div>
                        <div>
                            <a rel="noreferrer" href={'http://www.google.com/maps/place/' + address?.geo?.lat + ',' + address?.geo?.lng} target="_blank">
                                <span>show on map</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
    phone: PropTypes.string,
    company: PropTypes.object,
    address: PropTypes.object
};

export default UserItem;