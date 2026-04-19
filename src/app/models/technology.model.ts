export interface Technology {
  name: string;
  svgSourceLink: string;
  altText?: string;
}

export interface TechnologyCategory {
  categoryName: string;
  technologies: Technology[];
}
