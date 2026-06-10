const videoGroups = [
  {
    label: "AgileX",
    title: "AgileX bimanual manipulation",
    description:
      "For each AgileX task, GEAR-VLA is trained with only 200 demonstrations on a single object instance and directly evaluated on objects with unseen colors, sizes, and styles.",
    rows: [
      {
        // title: "T-shirt folding",
        videos: [
          {
            title: "T-shirt folding 1",
            // meta: "Third-person view",
            src: "视频/短袖（松灵）第三视角-2/短袖1.mp4",
          },
          {
            title: "T-shirt folding 2",
            // meta: "Third-person view",
            src: "视频/短袖（松灵）第三视角-2/短袖2.mp4",
          },
          {
            title: "T-shirt folding 3",
            // meta: "Third-person view",
            src: "视频/短袖（松灵）第三视角-1/短袖3.mp4",
          },
        ],
      },
      {
        // title: "T-shirt folding",
        videos: [
          {
            title: "Shorts folding 1",
            // meta: "Third-person view",
            src: "视频/短裤（松灵）第三视角/短裤1.mp4",
          },
          {
            title: "Shorts folding 2",
            // meta: "Third-person view",
            src: "视频/短裤（松灵）第三视角/短裤2.mp4",
          },
          {
            title: "Shorts folding 3",
            // meta: "Third-person view",
            src: "视频/短裤（松灵）第三视角/短裤3.mp4",
          },
        ],
      },
      {
        // title: "Parcel flipping",
        videos: [
          {
            title: "Parcel flipping 1",
            // meta: "Third-person view",
            src: "视频/快递（松灵）第三视角/快递1.mp4",
          },
          {
            title: "Parcel flipping 2",
            // meta: "Third-person view",
            src: "视频/快递（松灵）第三视角/快递2.mp4",
          },
          {
            title: "Parcel flipping 3",
            // meta: "Third-person view",
            src: "视频/快递（松灵）第三视角/快递4.mp4",
          },
        ],
      },
    ],
  },
  {
    label: "LDT-01",
    title: "Cross-embodiment transfer to LDT-01",
    description:
      "LDT-01 is a pretraining-unseen embodiment, and our embodiment canonicalization enables rapid policy adaptation to this new robot, with the same three tasks trained and tested under the AgileX setting.",
    rows: [
      {
        // title: "T-shirt folding",
        videos: [
          {
            title: "T-shirt folding 1",
            // meta: "Third-person view",
            src: "视频/短袖（聆动）第三视角/短袖1.mp4",
          },
          {
            title: "T-shirt folding 2",
            // meta: "Third-person view",
            src: "视频/短袖（聆动）第三视角/短袖2.mp4",
          },
          {
            title: "T-shirt folding 3",
            // meta: "Third-person view",
            src: "视频/短袖（聆动）第三视角/短袖3.mp4",
          },
        ],
      },
      {
        // title: "Shorts folding",
        videos: [
          {
            title: "Shorts folding 1",
            // meta: "Third-person view",
            src: "视频/短裤（聆动）第三视角/短裤2.mp4",
          },
          {
            title: "Shorts folding 2",
            // meta: "Third-person view",
            src: "视频/短裤（聆动）第三视角/短裤3.mp4",
          },
          {
            title: "Shorts folding 3",
            // meta: "Third-person view",
            src: "视频/短裤（聆动）第三视角/短裤4.mp4",
          },
        ],
      },
      {
        // title: "Parcel flipping",
        videos: [
          {
            // meta: "Third-person view",
            src: "视频/快递（聆动）第三视角/快递2.mp4",
          },
          {
            // meta: "Third-person view",
            src: "视频/快递（聆动）第三视角/快递4.mp4",
          },
        ],
      },
    ],
  },
  {
    label: "Universal Grasping",
    title: "Grasping anything in sparse and dense scenes",
    description:
      "GEAR-VLA performs mask-guided universal grasping of arbitrary unseen objects and remains robust under external disturbances.",
    videos: [
      {
        title: "Target: Tissue",
        // meta: "Unseen object grasping",
        src: "视频/万物抓取/VID_20251028_191208.mp4",
      },
      {
        title: "Target: Banana",
        // meta: "Unseen object grasping",
        src: "视频/万物抓取/VID_20251028_191235.mp4",
      },
      {
        title: "Target: tape measure",
        // meta: "Unseen object grasping",
        src: "视频/万物抓取/VID_20251028_191306.mp4",
      },
      {
        title: "Target: Cookie",
        // meta: "Unseen object grasping",
        src: "视频/万物抓取/VID_20251028_191345.mp4",
      },
      {
        title: "Target: Cake",
        // meta: "Deformable / delicate object",
        src: "视频/万物抓取/cake.mp4",
      },
      // {
      //   title: "Tools",
      //   // meta: "Rigid tools in clutter",
      //   src: "视频/万物抓取/tools.mp4",
      // },
      {
        title: "Target: Tissue | Re-grasping after Human Intervention",
        // meta: "",
        src: "视频/万物抓取/tissue1.mp4",
      },
    ],
  },
  {
    label: "Long-Horizon Sorting",
    title: "Parcel sorting rollouts",
    description:
      "Longer real-world clips demonstrate sustained manipulation under repeated object handling and placement decisions.",
    layout: "two",
    videos: [
      {
        title: "Parcel sorting 1",
        meta: "Long-horizon real-robot rollout",
        src: "视频/快递分拣/delivery1.mp4",
      },
      {
        title: "Parcel sorting 2",
        meta: "Long-horizon real-robot rollout",
        src: "视频/快递分拣/delivery2.mp4",
      },
    ],
  },
];

const root = document.querySelector("#video-root");
const PLAYBACK_RATE = 3;

function setVideoSpeed(video) {
  if (video.dataset.playbackRate === "1") {
    video.defaultPlaybackRate = 1;
    video.playbackRate = 1;
    return;
  }

  video.defaultPlaybackRate = PLAYBACK_RATE;
  video.playbackRate = PLAYBACK_RATE;
  video.addEventListener("loadedmetadata", () => {
    video.defaultPlaybackRate = PLAYBACK_RATE;
    video.playbackRate = PLAYBACK_RATE;
  });
}

function makeVideoCard(video) {
  const card = document.createElement("article");
  card.className = "video-card";

  const media = document.createElement("video");
  media.src = video.src;
  media.controls = true;
  media.muted = true;
  media.playsInline = true;
  media.preload = "metadata";
  setVideoSpeed(media);

  const caption = document.createElement("div");
  caption.className = "video-caption";

  if (video.title) {
    const title = document.createElement("strong");
    title.textContent = video.title;
    caption.appendChild(title);
  }

  if (video.meta) {
    const meta = document.createElement("span");
    meta.textContent = video.meta;
    caption.appendChild(meta);
  }

  card.appendChild(media);
  if (caption.children.length > 0) {
    card.appendChild(caption);
  }
  return card;
}

function renderVideos() {
  videoGroups.forEach((group) => {
    const section = document.createElement("section");
    section.className = "video-group";

    const top = document.createElement("div");
    top.className = "group-top";
    top.innerHTML = `
      <div>
        <span class="group-label">${group.label}</span>
        <h3>${group.title}</h3>
      </div>
      <p>${group.description}</p>
    `;

    const content = document.createElement("div");
    content.className = group.rows ? "video-rows" : `video-grid ${group.layout === "two" ? "two" : ""}`;

    if (group.rows) {
      group.rows.forEach((row) => {
        const rowEl = document.createElement("div");
        rowEl.className = "video-row";

        const rowTitle = document.createElement("h4");
        rowTitle.textContent = row.title;

        const grid = document.createElement("div");
        grid.className = "video-grid";
        row.videos.forEach((video) => grid.appendChild(makeVideoCard(video)));

        rowEl.append(rowTitle, grid);
        content.appendChild(rowEl);
      });
    } else {
      group.videos.forEach((video) => content.appendChild(makeVideoCard(video)));
    }

    section.append(top, content);
    root.appendChild(section);
  });
}

renderVideos();
document.querySelectorAll("video").forEach(setVideoSpeed);
