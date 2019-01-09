// action内でvueでいうrouter.push的なこと達成するために必要。
// BrowserRouterはhistoryObjectを自分で作って管理してる。
// なんだかよくわからないけど、historyObjectがあれば、ルーティングの操作ができるみたい。　

// BrowserRouter配下のコンポーネントはhistoryObjectが渡されるので、簡単に実現できる　
// コンポーネントネント以外の箇所ではhistoryObjectがないので、簡単にはできない。　

// この講座では、BrowserRouterが作成するhistoryObjectをhackするみたい

// ちょっと違う？　BrowserRouterというよりは、これを行うことで、独自のRouterを作るというほうが正しいかも　

// historyパッケージは、react-router-domのdependenciesに含まれるとのこと
import createHistory from 'history/createBrowserHistory'

// とはいえ、特段なにもしてない。
// index.jsのreact-dom-routerのオブジェクトをRouterにして、histroryプロパティを渡しただけ　

export default createHistory()
