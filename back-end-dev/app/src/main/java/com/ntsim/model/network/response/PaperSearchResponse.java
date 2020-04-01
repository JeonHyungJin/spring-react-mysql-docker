package com.ntsim.model.network.response;

import java.util.List;

import com.ntsim.model.entity.Paper;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class PaperSearchResponse {
	private List<Paper> searchedPaper;

}
