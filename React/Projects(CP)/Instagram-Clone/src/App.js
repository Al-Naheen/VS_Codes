import { Button, Input, makeStyles, Modal } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './App.css'
import { auth, db } from './firebase'
import ImageUpload from './ImageUpload'
import Post from './Post'
import InstagramEmbed from 'react-instagram-embed';

// Modal Styles
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[ 5 ],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  const classes = useStyles()
  const [ modalStyle ] = useState(getModalStyle)
  const [ posts, setPosts ] = useState([])
  const [ open, setOpen ] = useState(false)
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ user, setUser ] = useState(null);
  const [ openSignIn, setOpenSignIn ] = useState(false);

  // The below is what checks if you are logged in or not, and keeps you logged in on refresh
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // if user has logged in...
        setUser(authUser);
      } else {
        // if user has logged out... 
        setUser(null);
      }
    })
    return () => {
      // perform some cleanup actions
      unsubscribe();
    }
  }, [ user, username ]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })))
    })
  }, [])

  const signUp = (event) => {
    // This is to prevent the page from refreshing when we submit the form
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username
        })
      })
      .catch((error) => alert(error.message));
    // Set user so that footer changes accordingly

    // Close modal
    setOpen(false);
  }
  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    // Close modal
    setOpenSignIn(false);
  }

  // console.log(posts);
  return (
    <div className='app'>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className='app__signup'>
            <center>
              <img
                className="app__headerImage"
                src="https://firebasestorage.googleapis.com/v0/b/instagram-clone-325b6.appspot.com/o/images%2FnaheenInsta.png?alt=media&token=15467584-78ce-44d6-8f78-2fecbf4149d1"
                alt=""
              />
            </center>
            <Input
              type="text"
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={signUp} type='submit' variant="contained" color="secondary">Sign Up</Button>
          </form>
        </div>
      </Modal>

      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="app__headerImage"
                src="https://firebasestorage.googleapis.com/v0/b/instagram-clone-325b6.appspot.com/o/images%2FnaheenInsta.png?alt=media&token=15467584-78ce-44d6-8f78-2fecbf4149d1"
                alt=""
              />
            </center>
            <Input
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="secondary" type="submit" onClick={signIn}>Sign In</Button>
          </form>
        </div>
      </Modal>
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://firebasestorage.googleapis.com/v0/b/instagram-clone-325b6.appspot.com/o/images%2FnaheenInsta.png?alt=media&token=15467584-78ce-44d6-8f78-2fecbf4149d1"
          alt=""
        />
        {user ? (
          <Button variant="contained" color="secondary" onClick={() => auth.signOut()}>Log Out</Button>
        ) : (
            <div className="app__loginContainer">
              <Button className='app__signinButton' variant="contained" color="secondary" onClick={() => setOpenSignIn(true)}>Sign In</Button>
              <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>Sign Up</Button>
            </div>
          )
        }
      </div>

      <div className="app__posts">
        <div className="app__postsLeft">
          {
            posts.map(({ id, post }) => (
              <Post
                user={user}
                postId={id}
                key={id}
                username={post.username}
                caption={post.caption}
                imageUrl={post.imageUrl}
              ></Post>
            ))
          }
        </div>
        <div className="app__postsRight">
          <InstagramEmbed
            url="https://www.instagram.com/p/B_uf9dmAGPw/"
            maxWidth={320}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => { }}
            onSuccess={() => { }}
            onAfterRender={() => { }}
            onFailure={() => { }}
          />
        </div>
      </div>

      {user?.displayName ? (
        <ImageUpload username={user.displayName}></ImageUpload>
      ) : (
          <h3 style={{textAlign:"center", paddingBottom:'50px', fontWeight:'normal' }}>Sorry you need to login to upload <b><i> Posts & Comments</i></b></h3>
        )}
    </div>
  )
}

export default App
