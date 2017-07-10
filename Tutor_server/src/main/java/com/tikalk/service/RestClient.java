package com.tikalk.service;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;

/**
 * Created by yaniv on 10/07/2017.
 */
@Service
public class RestClient {
    @Value("rest.api.base.url")
    String baseUrl;

    public String invokeGetApi(String uri) {
        String url = baseUrl + uri;
        try {
            HttpClient client = HttpClientBuilder.create().build();
            HttpGet request = new HttpGet(url);
            request.addHeader("Content-type", "application/json");
            HttpResponse response = client.execute(request);

            return EntityUtils.toString(response.getEntity());
        } catch (Exception e) {
            return "Error";
        }
    }

}
