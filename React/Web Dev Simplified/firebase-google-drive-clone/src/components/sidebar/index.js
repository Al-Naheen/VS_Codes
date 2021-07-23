import React from 'react'
import '../../styles/Sidebar.css'

import NewFile from './NewFile'
import SidebarItem from './SidebarItem';

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import AddIcon from '@material-ui/icons/Add';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import StorageIcon from '@material-ui/icons/Storage';

const index = () => {
    return (
        <div className='sidebar pl-3' style={{
            borderRight: '1px solid #dbdbdb', flex: '0 0 18.666667%',
            maxWidth: '18.666667%',
            minWidth: '240px'
        }}>
            {/* <NewFile /> */}
            <div className='newFile'>
                <div className="newFile__container">
                    <AddIcon fontSize='large' style={{ marginLeft: '7px' }} />
                    <p style={{ marginBottom: '0', marginLeft: '6px' }}>New</p>
                </div>
            </div>




            <div className="sidebar__itemsContainer">
                <SidebarItem arrow icon={(<InsertDriveFileIcon />)} label={'My Drive'} />
                <SidebarItem arrow icon={(<ImportantDevicesIcon />)} label={'Computers'} />
                <SidebarItem icon={(<PeopleAltIcon />)} label={'Shared with me'} />
                <SidebarItem icon={(<QueryBuilderIcon />)} label={'Recent'} />
                <SidebarItem icon={(<StarBorderIcon />)} label={'Starred'} />
                <SidebarItem icon={(<DeleteOutlineIcon />)} label={'Bin'} />

                <hr />

                <SidebarItem icon={(<StorageIcon />)} label={'Storage'} />

            </div>

        </div>
    )
}

export default index
