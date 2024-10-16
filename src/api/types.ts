export const API_CONFIG = {
  BASE_URL: 'https://sonarcloud.io/api',
  PATHS: {
    PROJECTS: '/projects',
    BRANCHES: '/project_branches',
    PERMISSIONS: '/permissions'
  },
} as const;

export interface CreateProjectParams {
  project: string;
  organization: string;
  name: string;
}

export interface Project {
  key: string;
  name: string;
  qualifier: string;
  organization: string;
  visibility: 'public' | 'private';
}

export interface CreateProjectResponse {
  project: Project;
}

export interface GetProjectsByProjectKeyParams {
  organization: string;
  projects: string[];
}

export type GetProjectsByProjectKeyResponse = {
  components: Array<
    Project & {
      lastAnalysisDate: Date;
      revision: string;
    }
  >;
};

export interface PostBranchRenameParams {
  name: string;
  project: string;
}

export interface SetAdminPermissionsParams {
  project: string;
  organization: string;
  groupName: string;
}