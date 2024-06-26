import path from "path";

export default {
  '~': path.resolve(__dirname, '..'),
  '@controllers': path.join(__dirname, '..', 'controllers'),
  '@utils': path.join(__dirname, '..', 'utils'),
  '@services': path.join(__dirname, '..', 'services'),
  '@repositories': path.join(__dirname, '..', 'repositories'),
  '@models': path.join(__dirname, '..', 'models'),
}