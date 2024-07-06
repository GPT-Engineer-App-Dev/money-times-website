import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const NewsGrid = ({ stories }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stories.map((story, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{story.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{story.description}</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href={story.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

NewsGrid.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NewsGrid;