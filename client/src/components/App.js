import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import StreamList from './streams/StreamList'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamShow from './streams/StreamShow'
import StreamDelete from './streams/StreamDelete'



const App = ()=> {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList}/>
          <Route path="/stream/new" exact component={StreamCreate}/>
          <Route path="/stream/edit" exact component={StreamEdit}/>
          <Route path="/stream/delete" exact component={StreamDelete}/>
          <Route path="/stream/show" exact component={StreamShow}/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;