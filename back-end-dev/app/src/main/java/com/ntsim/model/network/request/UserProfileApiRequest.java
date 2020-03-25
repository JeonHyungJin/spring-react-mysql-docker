package com.ntsim.model.network.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class UserProfileApiRequest {

	private String studentNumber;

	private String oldPassword;
	
	private String newPassword;

	private String email;

	private String accessToken;
}
