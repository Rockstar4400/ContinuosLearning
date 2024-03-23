import React from 'react';

function Articles({articles}) {

  const renderItems = articles
            .map(({title,upvotes,date}, id) => {
      return (
            <tr data-testid="article" key={id}>
              <td data-testid="article-title">{title}</td>
              <td data-testid="article-upvotes">{upvotes}</td>
              <td data-testid="article-date">{date}</td>
            </tr>
            )
      });

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                    {renderItems}
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
