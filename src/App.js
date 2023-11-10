import './App.css';
import CMS from 'netlify-cms-app';
import 'netlify-cms-app/dist/cms.css'; 

function App() {
  CMS.init({
    config: {
      backend: {
        name: 'github',
        repo: 'your-username/your-repo',
      },
      media_folder: 'static/uploads',
      public_folder: '/uploads',
      collections: [
        {
          name: 'posts',
          label: 'Posts',
          folder: '_posts',
          create: true,
          fields: [
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Body', name: 'body', widget: 'markdown' },
          ],
        },
      ],
    },
  });
  return (
    <div className="App">
      <header className="App-header">ELSPETH SPARLING</header>

    </div>
  );
}

export default App;
