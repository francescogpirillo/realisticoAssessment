import React from 'react';
import css from './UserItem.module.css';

const UserItem = ({ name, email, address, website, phone, company }) => {

    return (
        <div className={`${css.userItem}`}>
            <div className="row">
                <div className="column">
                    <div className={css.name}>
                        <h5>{name}</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={`column ${css.marginTopButtom}`}>
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
                        <a href={website}>{website}</a>
                    </div>
                </div>
                <div className={`column ${css.marginTopButtom}`}>
                    <div className={css.title}>
                        Company
                    </div>
                    <div>
                        {company.name}
                    </div>
                    <div>
                        {company.catchPhrase}
                    </div>
                </div>
                <div className={`column ${css.marginTopButtom}`}>
                    <div className={css.title}>
                        Address
                    </div>
                    <div className={css.address}>
                        <div>
                            {address.city}
                        </div>
                        <div>
                            {address.street}
                        </div>
                        <div>
                            {address.zipcode}
                        </div>
                        <div>
                            <a rel="noreferrer" href={'https://www.google.com/maps/search/?api=1&amp;query=' + address.geo.lat + ',' + address.geo.lng} target="_blank">
                                <span>see on the map</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserItem;