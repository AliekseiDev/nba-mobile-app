import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from 'authRoutes/PrivateRoute';
import PublicRoute from 'authRoutes/PublicRoute';

import Layout from 'hoc/Layout/layout';
import Home from 'components/Home/home';
import News from 'components/News/news';
import Videos from 'components/Videos/videos';
import SignIn from 'components/SignIn/signIn';
import Dashboard from 'components/Dashboard/dashboard';
import MyPosts from 'components/MyPosts/myPosts';
import NotFound from 'components/NotFound';

import NewsArticle from 'components/Articles/Post/index';
import VideoArticle from 'components/Articles/Video/index';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <PublicRoute path="/" exact component={Home}/>
        <PublicRoute path="/news" exact component={News}/>
        <PublicRoute path="/videos" exact component={Videos}/>
        <PublicRoute path="/sign-in" restricted={true} exact component={SignIn}/>
        <PrivateRoute path="/dashboard" exact component={Dashboard}/>
        <PrivateRoute path="/my-posts" exact component={MyPosts}/>
        
        <PublicRoute path="/articles/:id/" exact component={NewsArticle}/>
        <PublicRoute path="/videos/:id/" exact component={VideoArticle}/>
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  );
}

export default Routes;