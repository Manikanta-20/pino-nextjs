
const webpack = require('webpack');
const{join}=require('path');
require('dotenv').config();
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  module.exports = withBundleAnalyzer({
   
    webpack(config, options) {
      return config;
    }
  });