# About React Router

* react-router: core component, you dont need install this manually
* react-router-dom: navigation for dom-based app
* react-router-native: navigation for native apps
* react-router-redux: Bindind data between Redux and React Router(not necessary) do not recommend this package

# Routers
you can choose these router

* BrowserRouter
* HashRouter
* MemoryRouter

# Basic for BrowserRouter

this is duplicate definination. but it's ok.
you can see two PageOne Component.
'''javascript
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne}/>
          <Route path="/" exact component={PageOne}/>
          <Route path="/pagetwo"  component={PageTwo}/>
        </div>
      </BrowserRouter>
'''

when you access `/pagetwo`, you can see PageOne and Pagetwo
react-router exract actual path, and check path.contains(your difinite path).

so `/pagetwo` contains `/` and `/pagetwo`. you can see 2 components.
if you use `exact={true}`,  or simply use `exact`, react-router use path === your definie instead of path.contains

'''javascript
      <BrowserRouter>
        <div>
          <Route path="/"  component={PageOne}/>
          <Route path="/pagetwo"  component={PageTwo}/>
        </div>
      </BrowserRouter>
'''