// Github File List
import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Time from './Time'

const FileList = () => {
  const [testFiles, files] = useState([
    {
      id: 1,
      name: 'build',
      type: 'folder',
      updated_at: '2022-01-11 21:24:00',
      latestCommit: {
        message: 'close#1687, Replace es3ify with Babel Es3 transforms (#1698)',
      },
    },
    {
      id: 2,
      name: 'docs',
      type: 'folder',
      updated_at: '2022-03-24 04:24:00',
      latestCommit: {
        message: 'Mention that we are observable in the API',
      },
    },
    {
      id: 3,
      name: 'examples',
      type: 'folder',
      updated_at: '2022-03-15 04:24:00',
      latestCommit: {
        message: 'Update doc to use test with Enzyme(#1692)',
      },
    },
    {
      id: 4,
      name: 'logo',
      type: 'folder',
      updated_at: '2022-03-02 04:24:00',
      latestCommit: {
        message: 'Use Reux logo as favicon on GitBook docs (#1761)',
      },
    },
    {
      id: 5,
      name: 'src',
      type: 'folder',
      updated_at: '2022-03-02 04:24:00',
      latestCommit: {
        message: 'Only warn for unexpected key once perkey (#1818)',
      },
    },
    {
      id: 6,
      name: 'tests',
      type: 'folder',
      updated_at: '2022-03-02 04:24:00',
      latestCommit: {
        message: 'Only warn for unexpected key once perkey (#1818)',
      },
    },
    {
      id: 7,
      name: 'babelrc',
      type: 'file',
      updated_at: '2019-07-11 21:24:00',
      latestCommit: {
        message: 'added a readme',
      },
    },
    {
      id: 8,
      name: 'README',
      type: 'file',
      updated_at: '2022-01-11 21:24:00',
      latestCommit: {
        message: 'added a readme',
      },
    },
  ])
  return (
    <table className='file-list'>
      {testFiles.map((files) => (
        /* now we use FilelistItem here */
        <FileListItem key={files.id} files={files} />
      ))}
    </table>
  )
}
FileList.propTypes = {
  files: PropTypes.array,
}

const FileListItem = ({ files }) => (
  /* this code has been extracted from FileList */
  <tr className='file-list-item'>
    <FileName files={files} />
    <CommitMessage commit={files.latestCommit} />
    <td className='age'>
      <Time time={files.updated_at} />
    </td>
  </tr>
)
FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
}

const CommitMessage = ({ commit }) => (
  <td className='commit-message'>{commit.message}</td>
)

function FileIcon({ files }) {
  let icon = 'fa-file-text-o'
  if (files.type === 'folder') {
    icon = 'fa-folder'
  }

  return (
    <td className='file-icon'>
      <i className={`fa ${icon}`} />
    </td>
  )
}

FileIcon.propTypes = {
  file: PropTypes.object.isRequired,
}

function FileName({ files }) {
  return (
    <>
      <FileIcon files={files} />
      <td className='file-name'>{files.name}</td>
    </>
  )
}

FileName.propTypes = {
  file: PropTypes.object.isRequired,
}

ReactDOM.render(<FileList />, document.querySelector('#root'))
