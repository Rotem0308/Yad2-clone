export interface IBanner {
  message: string;
  type: IBannerType;
}

export interface IBannerType {
  success: boolean;
  error: boolean;
  general: boolean;
}

// the createBannerType function creates an IBannerType object with the correct type set to true and others set to false.
// This ensures that the IBannerType is correctly configured each time you call this.banner.open .
export function createBannerType(
  type: 'success' | 'error' | 'general'
): IBannerType {
  return {
    success: type === 'success',
    error: type === 'error',
    general: type === 'general',
  };
}
