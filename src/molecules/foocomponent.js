import React from 'react';

import { Button, DropdownButton, MenuItem } from 'react-bootstrap';

const FooComponent = () => {
    return (
        <div>
            <Button>Default</Button>
            <Button bsStyle="primary">Primary</Button>
            <Button bsStyle="success">Success</Button>
            <DropdownButton>
                <MenuItem>Item 1</MenuItem>
                <MenuItem>Item 2</MenuItem>
                <MenuItem>Item 3</MenuItem>
            </DropdownButton>
        </div>
    )
}

export default FooComponent;