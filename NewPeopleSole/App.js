import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
};

const heavyComputation = (data) => {
  // Simulating heavy computation
  const startTime = performance.now();
  // Perform heavy computation on data here
  // For example: complex calculations or transformations
  const result = data.title.toUpperCase(); // Just a dummy computation
  const endTime = performance.now();
  console.log(`Heavy computation time for item ${data.id}: ${endTime - startTime}ms`);
  return result;
};

const ListItem = ({ data, onPress }) => {
  const memoizedComputation = useMemo(() => heavyComputation(data), [data]);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ padding: 10 }}>
        <Text>{data.id}</Text>
        <Text>{data.title}</Text>
        <Text>Computed Detail: {memoizedComputation}</Text>
      </View>
    </TouchableOpacity>
  );
};

const DetailsScreen = ({ postId }) => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    // Fetch post details using postId and update state with the data
    const fetchPostDetails = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const postData = await response.json();
        setPostData(postData);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetails();
  }, [postId]);

  useEffect(() => {
    // Log a message when the component re-renders due to changes in props
    console.log('DetailsScreen re-rendered');
  }, [postId]);

  return (
    <View style={{ padding: 10 }}>
      {postData ? (
        <>
          <Text>Post ID: {postData.id}</Text>
          <Text>Title: {postData.title}</Text>
          <Text>Body: {postData.body}</Text>
          {/* Display other post details as needed */}
        </>
      ) : (
        <Text>Loading post details...</Text>
      )}
    </View>
  );
};

const App = () => {
  const [data, setData] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    fetchDataAndSetState();
  }, []);

  const handleItemPress = useCallback((postId) => {
    setSelectedPostId(postId);
  }, []);

  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      {selectedPostId ? (
        <TouchableOpacity onPress={()=>{setSelectedPostId(null)}}>
        <DetailsScreen postId={selectedPostId} />
        </TouchableOpacity>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              data={item}
              onPress={() => handleItemPress(item.id)}
            />
          )}
        />
      )}
    </View>
  );
};

export default App;
