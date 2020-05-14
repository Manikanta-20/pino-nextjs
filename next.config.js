
const webpack = require('webpack');
const{join}=require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  module.exports = {
    webpack(config, options) {
      return config;
    }
  };