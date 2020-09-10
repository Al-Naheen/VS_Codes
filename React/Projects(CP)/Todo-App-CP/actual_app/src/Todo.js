import React from 'react'
import { ListItemText, ListItem, ListItemAvatar, List} from '@material-ui/core'

function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary='Dummy Deadline' ></ListItemText>
            </ListItem>
        </List>
    )
}

export default Todo