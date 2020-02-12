import React, { useContext } from 'react';
import { MealsContext } from '../../contexts/MealsContext';
import Select from 'react-select';
import './Inputbar.scss';

const Inputbar = () => {

    const { meals } = useContext(MealsContext)

    const styles = {
        control: (provided, state) => ({
            ...provided,
            background: '#000',
            border: '1px solid rgba(254, 145, 102, 0.25)',
            boxSizing: 'border-box',
            borderRadius: '20px',
            width: '100%',
            height: '32px',
            padding: '0 15px'
        }),
        menu: (provided) => ({
            ...provided,
            width: '100%',
            zIndex: '110',
            background: '#000'
        })
    }

    return (
        <div className="inputbar__container">
            <Select
                options={meals}
                placeholder={'Type your meal'}
                isSearchable={true}
                styles={styles}
                theme={theme => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        primary25: '#FE9166',
                        primary: '#FE9166',
                    },
                })}
            />
        </div>
    )
};

export default Inputbar;