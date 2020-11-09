import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { SortableElement } from 'react-sortable-hoc';
import styles from './styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement((props) => {
	const { classes, handleClick, name, color } = props;
	return (
		<div className={props.classes.root} style={{ backgroundColor: color }}>
			<div className={classes.boxConent}>
				<span> {name} </span>
				<DeleteOutlinedIcon
					className={classes.deleteIcon}
					onClick={handleClick}
				/>
			</div>
		</div>
	);
});
export default withStyles(styles)(DraggableColorBox);
