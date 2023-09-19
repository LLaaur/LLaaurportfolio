const frontend = ["html5", "css3", "javascript", "react", "redux", "tailwind"];
const backend = ["nodejs", "express", "mongodb", "mongoose", "cloudinary"];
const other = ["git", "github", "webpack", "heroku", "netlify"];

export const frontendImages = [];
export const backendImages = [];
export const otherImages = [];

gatherImages(frontend, frontendImages, 'frontend');
gatherImages(backend, backendImages, 'backend');
gatherImages(other, otherImages, 'other');

function gatherImages(skillNames, images, type) {
  skillNames.forEach((skill, index) => {
    images.push({
      id: index + 1,
      source: process.env.PUBLIC_URL + `/skills/${type}/${skill}.png`,
      name: skill,
    });
  });
}