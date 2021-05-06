import React from 'react';
import { Button, Menu, } from 'semantic-ui-react';



export default function NavBar() {
    return (
        <Menu inverted >
            <Menu.Item header>
                <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px', width: '50px' }} />
            </Menu.Item>
            <Menu.Item name='Expense' />
            <Menu.Item>
                <Button positive content='Create Expense' />
            </Menu.Item>
        </Menu>
    )
}