REPOSITORY=https://github.com/JimJ92120/canvas-2d-tiles.git

rm -rf index.* assets

mkdir build
git clone $REPOSITORY build

npm install --prefix=./build
npm run build --prefix=./build

cp -r ./build/dist/* .

rm -rf ./build
