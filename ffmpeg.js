const ffmpeg = require("fluent-ffmpeg");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

console.log(`${__dirname}//video2.mp4 :`, `${__dirname}//video2.mp4`);
ffmpeg(`${__dirname}//video2.mp4`, { timeout: 432000 })
  .addOptions([
    "-profile:v baseline",
    "-level 3.0",
    "-start_number 0",
    "-hls_time 10",
    "-hls_list_size 0",
    "-f hls",
  ])
  .output("videos/output2.m3u8")
  .on("end", () => {
    console.log("end");
  })
  .run();
