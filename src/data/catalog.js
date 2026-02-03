// src/data/catalog.js
// SFW anime-oriented tag gallery structure.
// thumb images go to: publicthumbs/<section>/<file>.webp

export const CATALOG = {
  heads: {
    title: "Heads",
    groups: [
      {
        id: "face_expressions",
        title: "face — expressions",
        items: [
          { id: "smile", tag: "smile", thumb: "thumbs/heads/smile.webp" },
          { id: "wink", tag: "wink", thumb: "thumbs/heads/wink.webp" },
          {
            id: "laughing",
            tag: "laughing",
            thumb: "thumbs/heads/laughing.webp",
          },
          {
            id: "surprised",
            tag: "surprised",
            thumb: "thumbs/heads/surprised.webp",
          },
          { id: "sad", tag: "sad", thumb: "thumbs/heads/sad.webp" },
          { id: "angry", tag: "angry", thumb: "thumbs/heads/angry.webp" },
          {
            id: "serious",
            tag: "serious",
            thumb: "thumbs/heads/serious.webp",
          },
          { id: "blush", tag: "blush", thumb: "thumbs/heads/blush.webp" },
          { id: "smirk", tag: "smirk", thumb: "thumbs/heads/smirk.webp" },
          {
            id: "open_mouth",
            tag: "open mouth",
            thumb: "thumbs/heads/open_mouth.webp",
          },
          {
            id: "closed_mouth",
            tag: "closed mouth",
            thumb: "thumbs/heads/closed_mouth.webp",
          },
          { id: "teeth", tag: "teeth", thumb: "thumbs/heads/teeth.webp" },

          { id: "crying", tag: "crying", thumb: "thumbs/heads/crying.webp" },
          { id: "tears", tag: "tears", thumb: "thumbs/heads/tears.webp" },

          {
            id: "embarrassed",
            tag: "embarrassed",
            thumb: "thumbs/heads/embarrassed.webp",
          },
          { id: "shy", tag: "shy", thumb: "thumbs/heads/shy.webp" },

          { id: "sleepy", tag: "sleepy", thumb: "thumbs/heads/sleepy.webp" },
          { id: "tired", tag: "tired", thumb: "thumbs/heads/tired.webp" },

          {
            id: "confused",
            tag: "confused",
            thumb: "thumbs/heads/confused.webp",
          },
          {
            id: "annoyed",
            tag: "annoyed",
            thumb: "thumbs/heads/annoyed.webp",
          },

          { id: "scared", tag: "scared", thumb: "thumbs/heads/scared.webp" },
          {
            id: "nervous",
            tag: "nervous",
            thumb: "thumbs/heads/nervous.webp",
          },

          {
            id: "determined",
            tag: "determined",
            thumb: "thumbs/heads/determined.webp",
          },
          { id: "frown", tag: "frown", thumb: "thumbs/heads/frown.webp" },

          { id: "pout", tag: "pout", thumb: "thumbs/heads/pout.webp" },
          {
            id: "sulking",
            tag: "sulking",
            thumb: "thumbs/heads/sulking.webp",
          },

          {
            id: "evil_smile",
            tag: "evil smile",
            thumb: "thumbs/heads/evil_smile.webp",
          },
          {
            id: "tsundere",
            tag: "tsundere",
            thumb: "thumbs/heads/tsundere.webp",
          },
        ],
      },
      {
        id: "eyes",
        title: "eyes — gaze & shape",
        items: [
          {
            id: "looking_at_viewer",
            tag: "looking at viewer",
            thumb: "thumbs/heads/looking_at_viewer.webp",
          },
          {
            id: "looking_away",
            tag: "looking away",
            thumb: "thumbs/heads/looking_away.webp",
          },
          {
            id: "looking_back",
            tag: "looking back",
            thumb: "thumbs/heads/looking_back.webp",
          },
          {
            id: "upturned_eyes",
            tag: "upturned eyes",
            thumb: "thumbs/heads/upturned.webp",
          },
          {
            id: "half_closed_eyes",
            tag: "half-closed eyes",
            thumb: "thumbs/heads/half_closed.webp",
          },
          {
            id: "closed_eyes",
            tag: "closed eyes",
            thumb: "thumbs/heads/closed.webp",
          },
          {
            id: "wide_eyes",
            tag: "wide-eyed",
            thumb: "thumbs/heads/wide.webp",
          },
          {
            id: "sparkle",
            tag: "sparkle",
            thumb: "thumbs/heads/sparkle.webp",
          },
        ],
      },
      {
        id: "mouth",
        title: "mouth",
        items: [
          {
            id: "open_mouth",
            tag: "open mouth",
            thumb: "thumbs/heads/mouth_open.webp",
          },
          {
            id: "closed_mouth",
            tag: "closed mouth",
            thumb: "thumbs/heads/mouth_closed.webp",
          },
          {
            id: "smirk",
            tag: "smirk",
            thumb: "thumbs/heads/mouth_smirk.webp",
          },
          { id: "pout", tag: "pout", thumb: "thumbs/heads/mouth_pout.webp" },
          { id: "grin", tag: "grin", thumb: "thumbs/heads/mouth_grin.webp" },
          {
            id: "teeth",
            tag: "teeth",
            thumb: "thumbs/heads/mouth_teeth.webp",
          },
        ],
      },
      {
        id: "hair_basic",
        title: "hair — basics",
        items: [
          {
            id: "short_hair",
            tag: "short hair",
            thumb: "thumbs/heads/hair_short.webp",
          },
          {
            id: "medium_hair",
            tag: "medium hair",
            thumb: "thumbs/heads/hair_medium.webp",
          },
          {
            id: "long_hair",
            tag: "long hair",
            thumb: "thumbs/heads/hair_long.webp",
          },
          {
            id: "twin_tails",
            tag: "twin tails",
            thumb: "thumbs/heads/hair_twintails.webp",
          },
          {
            id: "ponytail",
            tag: "ponytail",
            thumb: "thumbs/heads/hair_ponytail.webp",
          },
          { id: "braid", tag: "braid", thumb: "thumbs/heads/hair_braid.webp" },
          {
            id: "messy_hair",
            tag: "messy hair",
            thumb: "thumbs/heads/hair_messy.webp",
          },
          {
            id: "hair_over_one_eye",
            tag: "hair over one eye",
            thumb: "thumbs/heads/hair_over_one_eye.webp",
          },
        ],
      },
      {
        id: "bangs",
        title: "hair — bangs",
        items: [
          { id: "bangs", tag: "bangs", thumb: "thumbs/heads/bangs.webp" },
          {
            id: "blunt_bangs",
            tag: "blunt bangs",
            thumb: "thumbs/heads/bangs_blunt.webp",
          },
          {
            id: "side_swept_bangs",
            tag: "side-swept bangs",
            thumb: "thumbs/heads/bangs_side.webp",
          },
          {
            id: "parted_bangs",
            tag: "parted bangs",
            thumb: "thumbs/heads/bangs_parted.webp",
          },
          {
            id: "curtain_bangs",
            tag: "curtain bangs",
            thumb: "thumbs/heads/bangs_curtain.webp",
          },
        ],
      },
      {
        id: "head_accessories",
        title: "head accessories",
        items: [
          {
            id: "glasses",
            tag: "glasses",
            thumb: "thumbs/heads/acc_glasses.webp",
          },
          {
            id: "hairclip",
            tag: "hairclip",
            thumb: "thumbs/heads/acc_hairclip.webp",
          },
          {
            id: "hairband",
            tag: "hairband",
            thumb: "thumbs/heads/acc_hairband.webp",
          },
          {
            id: "ribbon",
            tag: "ribbon",
            thumb: "thumbs/heads/acc_ribbon.webp",
          },
          {
            id: "headphones",
            tag: "headphones",
            thumb: "thumbs/heads/acc_headphones.webp",
          },
          { id: "hat", tag: "hat", thumb: "thumbs/heads/acc_hat.webp" },
        ],
      },
    ],
  },

  composition: {
    title: "Composition",
    groups: [
      {
        id: "framing_shot",
        title: "framing / shot type",
        items: [
          {
            id: "portrait",
            tag: "portrait",
            thumb: "thumbs/composition/frame_portrait.webp",
          },
          {
            id: "close_up",
            tag: "close-up",
            thumb: "thumbs/composition/frame_close_up.webp",
          },
          {
            id: "upper_body",
            tag: "upper body",
            thumb: "thumbs/composition/frame_upper_body.webp",
          },
          {
            id: "cowboy_shot",
            tag: "cowboy shot",
            thumb: "thumbs/composition/frame_cowboy.webp",
          },
          {
            id: "full_body",
            tag: "full body",
            thumb: "thumbs/composition/frame_full_body.webp",
          },
          {
            id: "wide_shot",
            tag: "wide shot",
            thumb: "thumbs/composition/frame_wide.webp",
          },
        ],
      },
      {
        id: "angles",
        title: "camera angles",
        items: [
          {
            id: "eye_level",
            tag: "eye level",
            thumb: "thumbs/composition/ang_eye_level.webp",
          },
          {
            id: "low_angle",
            tag: "low angle",
            thumb: "thumbs/composition/ang_low.webp",
          },
          {
            id: "high_angle",
            tag: "high angle",
            thumb: "thumbs/composition/ang_high.webp",
          },
          {
            id: "dutch_angle",
            tag: "dutch angle",
            thumb: "thumbs/composition/ang_dutch.webp",
          },
          {
            id: "overhead_shot",
            tag: "overhead shot",
            thumb: "thumbs/composition/ang_overhead.webp",
          },
          {
            id: "from_behind",
            tag: "from behind",
            thumb: "thumbs/composition/ang_from_behind.webp",
          },
        ],
      },
      {
        id: "perspective",
        title: "perspective",
        items: [
          {
            id: "foreshortening",
            tag: "foreshortening",
            thumb: "thumbs/composition/persp_foreshortening.webp",
          },
          {
            id: "dynamic_angle",
            tag: "dynamic angle",
            thumb: "thumbs/composition/persp_dynamic_angle.webp",
          },
          {
            id: "vanishing_point",
            tag: "vanishing point",
            thumb: "thumbs/composition/persp_vanishing.webp",
          },
          {
            id: "fisheye",
            tag: "fisheye",
            thumb: "thumbs/composition/persp_fisheye.webp",
          },
        ],
      },
      {
        id: "focus_depth",
        title: "focus / depth",
        items: [
          {
            id: "depth_of_field",
            tag: "depth of field",
            thumb: "thumbs/composition/focus_dof.webp",
          },
          {
            id: "shallow_depth",
            tag: "shallow depth of field",
            thumb: "thumbs/composition/focus_shallow.webp",
          },
          {
            id: "bokeh",
            tag: "bokeh",
            thumb: "thumbs/composition/focus_bokeh.webp",
          },
          {
            id: "motion_blur",
            tag: "motion blur",
            thumb: "thumbs/composition/focus_motion_blur.webp",
          },
        ],
      },
      {
        id: "lighting",
        title: "lighting",
        items: [
          {
            id: "soft_lighting",
            tag: "soft lighting",
            thumb: "thumbs/composition/light_soft.webp",
          },
          {
            id: "dramatic_lighting",
            tag: "dramatic lighting",
            thumb: "thumbs/composition/light_dramatic.webp",
          },
          {
            id: "backlighting",
            tag: "backlighting",
            thumb: "thumbs/composition/light_back.webp",
          },
          {
            id: "rim_light",
            tag: "rim light",
            thumb: "thumbs/composition/light_rim.webp",
          },
          {
            id: "sunlight",
            tag: "sunlight",
            thumb: "thumbs/composition/light_sunlight.webp",
          },
          {
            id: "moonlight",
            tag: "moonlight",
            thumb: "thumbs/composition/light_moonlight.webp",
          },
        ],
      },
    ],
  },

  postures: {
    title: "Postures",
    groups: [
      {
        id: "standing",
        title: "standing",
        items: [
          {
            id: "standing",
            tag: "standing",
            thumb: "thumbs/postures/standing.webp",
          },
          {
            id: "contrapposto",
            tag: "contrapposto",
            thumb: "thumbs/postures/contrapposto.webp",
          },
          {
            id: "hands_on_hips",
            tag: "hands on hips",
            thumb: "thumbs/postures/hands_on_hips.webp",
          },
          {
            id: "one_hand_on_hip",
            tag: "one hand on hip",
            thumb: "thumbs/postures/one_hand_on_hip.webp",
          },
          {
            id: "arms_crossed",
            tag: "arms crossed",
            thumb: "thumbs/postures/arms_crossed.webp",
          },
          {
            id: "leaning",
            tag: "leaning",
            thumb: "thumbs/postures/leaning.webp",
          },
        ],
      },
      {
        id: "sitting",
        title: "sitting",
        items: [
          {
            id: "sitting",
            tag: "sitting",
            thumb: "thumbs/postures/sitting.webp",
          },
          {
            id: "sitting_on_chair",
            tag: "sitting on chair",
            thumb: "thumbs/postures/sitting_on_chair.webp",
          },
          {
            id: "sitting_on_bed",
            tag: "sitting on bed",
            thumb: "thumbs/postures/sitting_on_bed.webp",
          },
          {
            id: "legs_crossed",
            tag: "legs crossed",
            thumb: "thumbs/postures/legs_crossed.webp",
          },
          {
            id: "knees_together",
            tag: "knees together",
            thumb: "thumbs/postures/knees_together.webp",
          },
        ],
      },
      {
        id: "lying",
        title: "lying",
        items: [
          { id: "lying", tag: "lying", thumb: "thumbs/postures/lying.webp" },
          {
            id: "lying_on_side",
            tag: "lying on side",
            thumb: "thumbs/postures/lying_on_side.webp",
          },
          {
            id: "on_back",
            tag: "on back",
            thumb: "thumbs/postures/on_back.webp",
          },
          {
            id: "on_stomach",
            tag: "on stomach",
            thumb: "thumbs/postures/on_stomach.webp",
          },
          {
            id: "reclining",
            tag: "reclining",
            thumb: "thumbs/postures/reclining.webp",
          },
        ],
      },
      {
        id: "action",
        title: "action / dynamic",
        items: [
          {
            id: "dynamic_pose",
            tag: "dynamic pose",
            thumb: "thumbs/postures/dynamic_pose.webp",
          },
          {
            id: "running",
            tag: "running",
            thumb: "thumbs/postures/running.webp",
          },
          {
            id: "jumping",
            tag: "jumping",
            thumb: "thumbs/postures/jumping.webp",
          },
          {
            id: "spinning",
            tag: "spinning",
            thumb: "thumbs/postures/spinning.webp",
          },
          {
            id: "reaching_out",
            tag: "reaching out",
            thumb: "thumbs/postures/reaching_out.webp",
          },
        ],
      },
    ],
  },

  clothes: {
    title: "Clothes",
    groups: [
      {
        id: "school_uniform",
        title: "school uniform",
        items: [
          {
            id: "school_uniform",
            tag: "school uniform",
            thumb: "thumbs/wardrobe/school_uniform.webp",
          },
          {
            id: "sailor_uniform",
            tag: "sailor uniform",
            thumb: "thumbs/wardrobe/sailor_uniform.webp",
          },
          {
            id: "blazer",
            tag: "blazer",
            thumb: "thumbs/wardrobe/blazer.webp",
          },
          {
            id: "necktie",
            tag: "necktie",
            thumb: "thumbs/wardrobe/necktie.webp",
          },
          {
            id: "bowtie",
            tag: "bowtie",
            thumb: "thumbs/wardrobe/bowtie.webp",
          },
        ],
      },
      {
        id: "casual",
        title: "casual",
        items: [
          {
            id: "hoodie",
            tag: "hoodie",
            thumb: "thumbs/wardrobe/hoodie.webp",
          },
          {
            id: "tshirt",
            tag: "t-shirt",
            thumb: "thumbs/wardrobe/tshirt.webp",
          },
          {
            id: "sweater",
            tag: "sweater",
            thumb: "thumbs/wardrobe/sweater.webp",
          },
          {
            id: "jacket",
            tag: "jacket",
            thumb: "thumbs/wardrobe/jacket.webp",
          },
          {
            id: "shorts",
            tag: "shorts",
            thumb: "thumbs/wardrobe/shorts.webp",
          },
        ],
      },
      {
        id: "dress",
        title: "dress",
        items: [
          { id: "dress", tag: "dress", thumb: "thumbs/wardrobe/dress.webp" },
          {
            id: "sundress",
            tag: "sundress",
            thumb: "thumbs/wardrobe/sundress.webp",
          },
          {
            id: "kimono",
            tag: "kimono",
            thumb: "thumbs/wardrobe/kimono.webp",
          },
          {
            id: "yukata",
            tag: "yukata",
            thumb: "thumbs/wardrobe/yukata.webp",
          },
        ],
      },
      {
        id: "accessories",
        title: "accessories",
        items: [
          { id: "scarf", tag: "scarf", thumb: "thumbs/wardrobe/scarf.webp" },
          {
            id: "gloves",
            tag: "gloves",
            thumb: "thumbs/wardrobe/gloves.webp",
          },
          { id: "bag", tag: "bag", thumb: "thumbs/wardrobe/bag.webp" },
          {
            id: "choker",
            tag: "choker",
            thumb: "thumbs/wardrobe/choker.webp",
          },
          {
            id: "earrings",
            tag: "earrings",
            thumb: "thumbs/wardrobe/earrings.webp",
          },
        ],
      },
    ],
  },

  background: {
    title: "Background",
    groups: [
      {
        id: "locations_indoor",
        title: "locations — indoor",
        items: [
          {
            id: "bedroom",
            tag: "bedroom",
            thumb: "thumbs/background/bedroom.webp",
          },
          {
            id: "classroom",
            tag: "classroom",
            thumb: "thumbs/background/classroom.webp",
          },
          {
            id: "kitchen",
            tag: "kitchen",
            thumb: "thumbs/background/kitchen.webp",
          },
          { id: "cafe", tag: "cafe", thumb: "thumbs/background/cafe.webp" },
        ],
      },
      {
        id: "locations_outdoor",
        title: "locations — outdoor",
        items: [
          {
            id: "street",
            tag: "street",
            thumb: "thumbs/background/street.webp",
          },
          { id: "park", tag: "park", thumb: "thumbs/background/park.webp" },
          { id: "beach", tag: "beach", thumb: "thumbs/background/beach.webp" },
          {
            id: "forest",
            tag: "forest",
            thumb: "thumbs/background/forest.webp",
          },
        ],
      },
      {
        id: "time_weather",
        title: "time / weather",
        items: [
          { id: "day", tag: "day", thumb: "thumbs/background/day.webp" },
          { id: "night", tag: "night", thumb: "thumbs/background/night.webp" },
          {
            id: "sunset",
            tag: "sunset",
            thumb: "thumbs/background/sunset.webp",
          },
          { id: "rain", tag: "rain", thumb: "thumbs/background/rain.webp" },
          { id: "snow", tag: "snow", thumb: "thumbs/background/snow.webp" },
        ],
      },
    ],
  },

  styles: {
    title: "Styles",
    groups: [
      {
        id: "render_style",
        title: "render style",
        items: [
          {
            id: "anime_style",
            tag: "anime style",
            thumb: "thumbs/styles/anime_style.webp",
          },
          {
            id: "illustration",
            tag: "illustration",
            thumb: "thumbs/styles/illustration.webp",
          },
          {
            id: "watercolor",
            tag: "watercolor",
            thumb: "thumbs/styles/watercolor.webp",
          },
          { id: "sketch", tag: "sketch", thumb: "thumbs/styles/sketch.webp" },
          {
            id: "cel_shading",
            tag: "cel shading",
            thumb: "thumbs/styles/cel_shading.webp",
          },
          {
            id: "soft_shading",
            tag: "soft shading",
            thumb: "thumbs/styles/soft_shading.webp",
          },
        ],
      },
      {
        id: "lineart",
        title: "lineart",
        items: [
          {
            id: "clean_lineart",
            tag: "clean lineart",
            thumb: "thumbs/styles/clean_lineart.webp",
          },
          {
            id: "detailed_lineart",
            tag: "detailed lineart",
            thumb: "thumbs/styles/detailed_lineart.webp",
          },
          {
            id: "thin_lines",
            tag: "thin lines",
            thumb: "thumbs/styles/thin_lines.webp",
          },
          {
            id: "thick_lines",
            tag: "thick lines",
            thumb: "thumbs/styles/thick_lines.webp",
          },
        ],
      },
      {
        id: "coloring",
        title: "coloring",
        items: [
          {
            id: "pastel_colors",
            tag: "pastel colors",
            thumb: "thumbs/styles/pastel_colors.webp",
          },
          {
            id: "vibrant_colors",
            tag: "vibrant colors",
            thumb: "thumbs/styles/vibrant_colors.webp",
          },
          {
            id: "muted_colors",
            tag: "muted colors",
            thumb: "thumbs/styles/muted_colors.webp",
          },
          {
            id: "monochrome",
            tag: "monochrome",
            thumb: "thumbs/styles/monochrome.webp",
          },
        ],
      },
      {
        id: "effects",
        title: "effects (SFW)",
        items: [
          {
            id: "sparkles",
            tag: "sparkles",
            thumb: "thumbs/styles/sparkles.webp",
          },
          {
            id: "lens_flare",
            tag: "lens flare",
            thumb: "thumbs/styles/lens_flare.webp",
          },
          {
            id: "glowing",
            tag: "glowing",
            thumb: "thumbs/styles/glowing.webp",
          },
          {
            id: "particles",
            tag: "particles",
            thumb: "thumbs/styles/particles.webp",
          },
        ],
      },
    ],
  },
};

export const NAV = Object.entries(CATALOG).map(([id, v]) => ({
  id,
  label: v.title,
}));
